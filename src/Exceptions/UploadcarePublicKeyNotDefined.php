<?php

namespace Enflow\NovaUploadcareField\Exceptions;

use Exception;

class UploadcarePublicKeyNotDefined extends Exception
{
    public static function create()
    {
        return new static("Uploadcare public key isn't defined, see README.md. The key `services.uploadcare.public_key` must be defined.");
    }
}
