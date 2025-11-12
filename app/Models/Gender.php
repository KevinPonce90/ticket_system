<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    protected $table = 'cat_genders';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'code',
        'name',
    ];

    public $timestamps = false;
}
