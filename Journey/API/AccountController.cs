using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Journey.Api
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private UserRepository _repo = null;

        public AccountController()
        {
            _repo = new UserRepository();
        }

        //post api/account/register
        [AllowAnonymous]
        [Route("Register")]

        public async Task<IHttpActionResult> Register(User userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await _repo.RegisterUser(userModel);

            if (result == null) return InternalServerError();

            return Ok();
        }
    }
}
