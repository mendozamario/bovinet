using System.Threading.Tasks;
using bovinet.Identity;
using bovinet.Models;
using Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenGenerator _tokenGenerator;

        public UsersController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ITokenGenerator tokenGenerator)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenGenerator = tokenGenerator;
        }

        private void SetIdentityResultErrors(IdentityResult identityResult)
        {
            foreach (IdentityError error in identityResult.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<ApplicationUserViewModel>> PostUser([FromBody] ApplicationUserInputModel userInputModel)
        {
            ApplicationUser applicationUser = new ApplicationUser
            {
                UserName = userInputModel.Username,
                Email = userInputModel.Email
            };

            IdentityResult result = await _userManager.CreateAsync(applicationUser, userInputModel.Password);

            if (!result.Succeeded)
            {
                SetIdentityResultErrors(result);
                return BadRequest(new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest
                });
            }

            return GenerateAuthenticateUser(applicationUser);
        }

        private ActionResult<ApplicationUserViewModel> GenerateAuthenticateUser(ApplicationUser user)
        {
            ApplicationUserViewModel userViewModel = new ApplicationUserViewModel
            {
                Username = user.UserName,
                Id = user.Id,
                Email = user.Email
            };

            userViewModel.Token = _tokenGenerator.GenerateToken(user.UserName);

            return userViewModel;
        }

        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<ActionResult<ApplicationUserViewModel>> Login([FromBody] LoginRequest loginRequest)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(loginRequest.UsernameOrEmail);
            if (user is null)
            {
                user = await _userManager.FindByEmailAsync(loginRequest.UsernameOrEmail);
            }

            if (user is null)
            {
                return NotFound($"El nombre de usuario o email {loginRequest.UsernameOrEmail} no se encuentra registrado");
            }

            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(user, loginRequest.Password, false, false);
            if (!result.Succeeded)
            {
                return BadRequest("Contraseña incorrecta");
            }

            return GenerateAuthenticateUser(user);
        }
    }
}
