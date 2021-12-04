# Nova Uploadcare Field

An file field using the UploadCare API.
 
You can upload a file through drag-and-drop, url or Google Drive. The file is stored on Uploadcare and saved as an URL in the model.

### Installing

```bash
composer require enflow/nova-uploadcare-field
```

### Getting Started

Add Uploadcare Public Key to your `config/services.php` array

```php
'uploadcare' => [
    'public_key' => 'XXXXX',
],
```

Register the field in the Nova resource:

```php
use Enflow\NovaUploadcareField\Uploadcare;
```

Use the field:

```php
Uploadcare::make('File')
```

## Credits
Largely based on the package [`nova-uploadcare-imagefield`](https://bitbucket.org/adnanchowdhury/nova-uploadcare-imagefield/), created by Adnan Chowdhury. Thanks Adnan!

## Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security
If you discover any security related issues, please email michel@enflow.nl instead of using the issue tracker.

## Credits
- [Michel Bardelmeijer](https://github.com/mbardelmeijer)
- [Adnan Chowdhury](https://bitbucket.org/adnanchowdhury) 
- [All Contributors](../../contributors)

## About Enflow
Enflow is a digital creative agency based in Alphen aan den Rijn, Netherlands. We specialize in developing web applications, mobile applications and websites. You can find more info [on our website](https://enflow.nl/en).

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
