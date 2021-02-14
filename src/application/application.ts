import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class Application {
  private readonly application: INestApplication;

  constructor(application: INestApplication) {
    this.application = application;
  }

  async init(): Promise<void> {
    this.application.enableCors({ origin: 'http://localhost:3000' });
    this.application.useGlobalPipes(new ValidationPipe({ transform: true }));
    this.initSwagger();
  }

  async listen(): Promise<void> {
    const port = 5000;
    await this.application.listen(port, () =>
      console.log(`my-cute-blog listening on port ${port}`),
    );
  }

  private initSwagger(): void {
    const options = new DocumentBuilder()
      .setTitle('My Cute Blog')
      .setDescription('Mert Tosunun güzel blogu')
      .setVersion(process.env.COMMIT_HASH || 'local')
      .addTag('home')
      .build();

    SwaggerModule.setup(
      'swagger',
      this.application,
      SwaggerModule.createDocument(this.application, options),
    );
  }
}
