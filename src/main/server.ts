/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-void */
import 'module-alias/register';
import { join } from 'path';
import cors from 'fastify-cors';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

export type AppOptions = { logger: true } & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify: FastifyInstance,
  opts: Partial<AutoloadPluginOptions>
): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  fastify.register(cors);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'infra/fastify/plugins'),
    options: opts
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  });
};

export default app;
export { app };
