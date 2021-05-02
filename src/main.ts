import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application-module';
import { Application } from './application/application';

const main = async () => {
  const applicationModule = await NestFactory.create(ApplicationModule, {
    cors: false,
  });
  const application = new Application(applicationModule);
  await application.init();
  await application.listen();
};

main();
