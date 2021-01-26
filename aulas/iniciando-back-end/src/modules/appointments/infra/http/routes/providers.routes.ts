import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providerssRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providerssRouter.use(ensureAuthenticated);

providerssRouter.get('/', providersController.index);
providerssRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);
providerssRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);

export default providerssRouter;
