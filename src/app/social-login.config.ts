import { AuthServiceConfig, FacebookLoginProvider } from 'angular5-social-login';
export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('{2197579483597792}')
      }
    ]);
    return config;
}
