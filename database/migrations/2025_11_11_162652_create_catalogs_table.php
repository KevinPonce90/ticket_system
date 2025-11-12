<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Areas
        Schema::create('cat_areas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 2)->unique();
            $table->string('name')->nullable(false);
        });

        // Generos
        Schema::create('cat_genders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 1)->unique();
            $table->string('name')->nullable(false);
        });

        // Prioridades
        Schema::create('cat_priorities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 1)->unique();
            $table->string('name')->nullable(false);
        });

        // Estatus
        Schema::create('cat_statuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 1)->unique();
            $table->string('name')->nullable(false);
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalogs');
    }
};
