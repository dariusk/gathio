module.exports = {
    // Your domain goes here. If there is a port it should be 'domain:port', but otherwise just 'domain'
    'domain' : 'localhost:3000' ,
    'port': '3000',
    'email': 'contact@example.com',
    'sitename': 'gathio',
    'isFederated': true,
    // If left blank, this defaults to https://yourdomain.com/images/gathio-email-logo.gif. Set a full URL here to change it to your own logo (or just change the file itself)
    'logo_url': '',
    'oauth': false,
    // uncomment and fill in parameters to enable oauth for creating new events
    //'oauth': {
    //  'client_id': '',
    //  'client_secret': '',
    //  'redirect_uri': '',
    //  'domain': 'oauth.example',
    //  'authorize_path': '/oauth/authorize',
    //  'token_path': '/oauth/token',
    //  'token_verification_path': '/path/to/token/verifier',
    //}
};
