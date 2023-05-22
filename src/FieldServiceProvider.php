<?php

namespace panchania83\NovaUploadcareField;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class FieldServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('uploadcare', __DIR__ . '/../dist/js/field.js');
            Nova::style('uploadcare', __DIR__ . '/../dist/css/field.css');
        });
    }
}
