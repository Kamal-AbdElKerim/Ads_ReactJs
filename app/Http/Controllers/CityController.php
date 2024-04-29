<?php

namespace App\Http\Controllers;

use App\Repositories\CityRepository;
use Illuminate\Http\Request;

class CityController extends Controller
{
    protected $cityRepository;

    public function __construct(CityRepository $cityRepository)
    {
        $this->cityRepository = $cityRepository;
    }

    public function index()
    {
        $cities = $this->cityRepository->getCities();
        return $cities;
    }
}
    