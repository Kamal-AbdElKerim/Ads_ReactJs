<?php

namespace App\Repositories;

class CityRepository
{
    public function getCities()
    {
        return json_decode(file_get_contents(public_path('json/city.json')), true);

    }
}
