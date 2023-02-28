import { IGetPromotionBannerResponse } from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const promotionApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPromotions: build.query<IGetPromotionBannerResponse, void>({
      query: () => ({
        url: '/marketplace/promotion-banners',
        method: 'GET',
      }),
      transformResponse: (response: IGetPromotionBannerResponse) => {
        return response;
      },
    }),
  }),
});
