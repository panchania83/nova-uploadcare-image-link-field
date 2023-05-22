# Nova Uploadcare Image Link Field

An file field using the UploadCare API.
 
You can upload a file through drag-and-drop, url or Google Drive. The file is stored on Uploadcare and saved as an URL in the model.

### Installing

```bash
composer require panchania83/nova-uploadcare-field
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
use panchania83\NovaUploadcareField\UploadcareImageLink;
```

Use the field:

```php
UploadcareImageLink::make('File')
```
## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
