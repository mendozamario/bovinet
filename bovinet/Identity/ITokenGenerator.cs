namespace bovinet.Identity
{
    public interface ITokenGenerator
    {
        string GenerateToken(string username);
    }
}
