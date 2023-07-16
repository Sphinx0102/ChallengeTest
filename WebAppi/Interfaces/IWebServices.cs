using WebAppi.Dto;

namespace WebAppi.Interfaces
{
    public interface IWebServices
    {
        public getTotalSellersResponse GetTotalSellers(); //graphix green
        public getBestSellersResponse getBestSellers(); //graphic kpiText1
        public getAgePublicReachedResponse getAgePublicReached(); //graphic pie
        public getFirstThreeProdResponse getFirstThreeProd(); //graphinx kpi1
        public getLastTwoProdResponse getLastTwoProd(); //grafic horizontal bars
        public getBestSellerMontResponse getBestSellerMont(); //graphic bars
        public getCurrentStatusResponse getCurrentStatus(); //graphic donut 
    }
}
