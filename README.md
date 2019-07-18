# Nova Uploadcare Field

An file field using the UploadCare API.
 
You can upload an file through drag-and-drop, url or google drive. The file is stored on Uploadcare and saved as a url in the model.

### Installing

~~~~
composer require enflow/nova-uploadcare-field
~~~~

### Getting Started

Add Uploadcare Public Key to your `config/services.php` array

~~~~
    'uploadcare' => [
        'public_key' => 'XXXXX',
    ],
~~~~

Register the field in the Nova resource:

~~~~
use Enflow\NovaUploadcareFile\Uploadcare;
~~~~

Use the field:

~~~~
Uploadcare::make('File')
~~~~

## Credits
Largely based on the package package [`nova-uploadcare-imagefield`](https://bitbucket.org/adnanchowdhury/nova-uploadcare-imagefield/), created by Adnan Chowdhury.

## Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security
If you discover any security related issues, please email michel@enflow.nl instead of using the issue tracker.

## Credits
- [Michel Bardelmeijer](https://github.com/mbardelmeijer)
* [Adnan Chowdhury](https://bitbucket.org/adnanchowdhury) 
- [All Contributors](../../contributors)

## About Enflow
Enflow is a digital creative agency based in Alphen aan den Rijn, Netherlands. We specialize in developing web applications, mobile applications and websites. You can find more info [on our website](https://enflow.nl/en).

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
