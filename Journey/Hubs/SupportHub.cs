using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Journey.Hubs
{
    [Authorize]
    public class SupportHub : Hub
    {
        [Authorize]

        public void Send(string name, string messege)
        {
            //  Call the broadcastMessege method to update clients.
            //Clients.All.broadcastMessege(name, messege);
            Clients.Group("SecretGroup").broadcastMessege(name, messege);

            var user = Context.User.Identity.AuthenticationType;
        }
        public void Hello()
        {
            Clients.All.hello();
        }
        public override Task OnConnected()
        {
            var connectionId = Context.ConnectionId;
            var username = Context.QueryString["username"];
            if (username.Equals("kalle@kula.se"))
            {
                Groups.Add(connectionId, "SecretGroup");
            }
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }

    }


}