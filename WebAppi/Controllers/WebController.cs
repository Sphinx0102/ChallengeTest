using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAppi.Dto;
using WebAppi.Interfaces;

namespace WebAppi.Controllers
{
    [ApiController]
    [Route("/api/")]
    public class WebController : ControllerBase
    {
        IWebServices Service { get; set; }

        public WebController(IWebServices service)
        {
            Service = service;
        }
        [HttpGet]
        [Route("getTotalSellers")]
        public getTotalSellersResponse getTotalSellers()
        {
            var response = Service.GetTotalSellers();
            return response;
        }
        [HttpGet]
        [Route("getBestSellers")]
        public getBestSellersResponse getBestSellers()
        {
            var response = Service.getBestSellers();
            return response;
        }
        [HttpGet]
        [Route("getAgePublicReached")]
        public getAgePublicReachedResponse getAgePublicReached()
        {
            var response = Service.getAgePublicReached();
            return response;
        }
        [HttpGet]
        [Route("getCurrentStatus")]
        public getCurrentStatusResponse getCurrentStatus()
        {
            var response = Service.getCurrentStatus();  
            return response;    
        }
        [HttpGet]
        [Route("getFirstThreeProd")]
        public getFirstThreeProdResponse getFirstThreeProd()
        {
            var response = Service.getFirstThreeProd();
            return response;
        }
        [HttpGet]
        [Route("getBestSellerMont")]
        public getBestSellerMontResponse getBestSellerMont()
        {
            var response = Service.getBestSellerMont();
            return response;
        }
        [HttpGet]
        [Route("getLastTwoProd")]
        public getLastTwoProdResponse getLastTwoProd()
        {
            var response = Service.getLastTwoProd();
            return response;
        }
    }
}
