<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectMainController extends Controller
{
    public function index(){
        return Inertia::render('Main/Project');
    }
}
