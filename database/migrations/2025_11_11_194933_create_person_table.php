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
        Schema::create('person', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('first_last_name');
            $table->string('second_last_name');
            $table->string('mobile')->nullable();
            $table->string('email')->unique();
            $table->unsignedBigInteger('gender_id');
            $table->foreign('gender_id')->references('id')->on('cat_genders')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person');
    }
};
