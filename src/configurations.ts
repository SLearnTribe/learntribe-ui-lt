
export const TokenRenewMode = {
  access_token_or_id_token_invalid: 'access_token_or_id_token_invalid',
  access_token_invalid: 'access_token_invalid',
  id_token_invalid: 'id_token_invalid',
};

export const configurationIdentityServer = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + '/authentication/silent-callback',
    // silent_login_uri: window.location.origin + '/authentication/silent-login',
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
    // authority_time_cache_wellknowurl_in_second: 60* 60,
    refresh_time_before_tokens_expiration_in_second: 40,
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
    // storage: localStorage,
    // silent_login_timeout: 3333000
    // monitor_session: true,
    extras: { youhou_demo: 'youhou' },
    token_renew_mode: TokenRenewMode.access_token_invalid,
};

export const configurationIdentityServer1 = {
    client_id: 'balosar-blazo',
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + '/authentication/silent-callback',
    // silent_login_uri: window.location.origin + '/authentication/silent-login',
    scope: 'openid offline_access profile email',
    authority: 'https://localhost:44310',
    // authority_time_cache_wellknowurl_in_second: 60* 60,
    refresh_time_before_tokens_expiration_in_second: 40,
    // service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
    // storage: localStorage,
    // silent_login_timeout: 3333000
    // monitor_session: true,
    token_renew_mode: TokenRenewMode.access_token_invalid,
};

export const configurationIdentityServerWithHash = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin + '/multi-auth/authentification#authentication-callback',
    silent_redirect_uri: window.location.origin + '/multi-auth/authentification#authentication-silent-callback',
    silent_login_uri: window.location.origin + '/multi-auth/authentification#authentication-silent-login',
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
    refresh_time_before_tokens_expiration_in_second: 10,
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
};

const domain = 'http://www.smilebat.xyz/auth'
const local = 'localhost:8085/auth'
const localSecret = 'EfuSTQbsp7tSgnJK9USbTvmPGiOdOaKv';
const domainSecret = 'bP9zTt7zArJBbIYwmFCE2AiyzFTD1Ppo'
const redirects = 'localhost:3000';
export const configurationIdentityServerWithoutDiscovery = {
    client_id: 'nginx',
    redirect_uri: 'http://www.smilebat.xyz/smile-bat/dashboard',
    silent_redirect_uri: 'http://www.smilebat.xyz',
    silent_login_uri: 'http://www.smilebat.xyz',
    scope: 'openid email profile',
    authority:domain,
    authority_configuration: {
      authorization_endpoint:domain+'/realms/master/protocol/openid-connect/auth',
      token_endpoint: domain +'/realms/master/protocol/openid-connect/token',
      userinfo_endpoint: domain +'/realms/master/protocol/openid-connect/userinfo',
      end_session_endpoint: domain +'/realms/master/protocol/openid-connect/logout',
      check_session_iframe: domain +'/realms/master/protocol/openid-connect/login-status-iframe.html',
      revocation_endpoint: domain +'/realms/master/protocol/openid-connect/revoke',
      issuer: domain + '/realms/master',
    },
    refresh_time_before_tokens_expiration_in_second: 10,
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
    token_request_extras: {
        client_secret: domainSecret,
    },
};

export const configurationAuth0 = {
    client_id: 'xGZxEAJhzlkuQUlWl90y1ntIX-0UDWHx',
    redirect_uri: window.location.origin + '/callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://kdhttps.auth0.com',
    refresh_time_before_tokens_expiration_in_second: 10,
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
};

export const configurationGoogle = {
    client_id: '908893276222-f2drloh56ll0g99md38lv2k810d0nk0p.apps.googleusercontent.com',
    redirect_uri: `${window.location.origin}/multi-auth/callback-google`,
    silent_redirect_uri: window.location.origin + '/multi-auth/silent-callback-google',
    scope: 'openid profile email',
    authority: 'https://accounts.google.com/',
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: false,
    token_request_extras: {
        client_secret: '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',
    },
    monitor_session: false,
};
