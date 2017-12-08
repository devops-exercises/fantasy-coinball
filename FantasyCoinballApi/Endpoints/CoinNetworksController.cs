using System;
using System.Collections.Generic;
using System.Web.Http;
using FantasyCoinballApi.Models;

namespace FantasyCoinballApi.Endpoints
{
    public class CoinNetworksController : ApiController
    {
        public CoinNetworksController()
        {
        }

        [HttpGet]
        [Route("api/networks")]
        public IEnumerable<CoinNetwork> GetCoinNetworks()
        {
            return new List<CoinNetwork>
            {
                new CoinNetwork() {
                    Name = "Ethellium",
                    Currency = new Currency() {
                        Symbol = "ETH"
                    },
                    People = new Person[] {
                        new TechLead { Name = "Vitalik", Score = 2000 },
                        new Evangelist { Name = "Mihai" },
                        new Developer { Name = "Anthony" },
                        new Developer { Name = "Charles"}
                    }
                },
                new CoinNetwork() {
                    Name = "FlitCoin",
                    Currency = new Currency() {
                        Symbol = "FTC"
                    },
                    People = new Person[] {
                        new WildCard { Name = "Satoshi", Score = 7000 },
                        new TechLead { Name = "Wladimir" },
                        new Developer { Name = "Jonas" },
                        new Developer { Name = "Marco" }
                    }
                }
            };
        }
    }
}
