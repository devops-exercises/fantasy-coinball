using System;
using System.Web.Http;
using FantasyCoinballApi.Models;

namespace FantasyCoinballApi.Endpoints
{
    public class UsersController : ApiController
    {
        public UsersController()
        {
        }

        [Route("/currentUserProfile")]
        Profile GetCurrentUserProfile()
        {
            return new Profile()
            {
                Name = "Lionell",
                Email = "lionell.pack@elabor8.com.au"
            };
        }
    }
}
