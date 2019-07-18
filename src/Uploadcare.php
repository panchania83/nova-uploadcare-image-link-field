<?php

namespace Enflow\NovaUploadcare;

use Laravel\Nova\Fields\Field;

class Uploadcare extends Field
{
    public $component = 'uploadcare';

    public function __construct($name, $attribute = null, $resolveCallback = null)
    {
    	parent::__construct($name, $attribute, $resolveCallback);

    	$this->key(config('services.uploadcare.public_key'));
    }

    public function key($key)
    {
    	return $this->withMeta(['key' => $key ]);
    }
}