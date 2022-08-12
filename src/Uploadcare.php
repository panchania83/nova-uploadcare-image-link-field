<?php

namespace Enflow\NovaUploadcareField;

use Laravel\Nova\Fields\Field;

class Uploadcare extends Field
{
    public $component = 'nova-uploadcare-field';

    public $showOnIndex = false;

    public function __construct($name, $attribute = null, $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        if (!$publicKey = config('services.uploadcare.public_key')) {
            throw Exceptions\UploadcarePublicKeyNotDefined::create();
        }

        $this->key($publicKey);
    }

    public function key($key)
    {
        return $this->withMeta(['key' => $key]);
    }
}
