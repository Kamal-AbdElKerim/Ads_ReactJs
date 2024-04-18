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
        Schema::create('ad_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('AdID')->constrained('ads')->onDelete('CASCADE');
            $table->foreignId('TagID')->constrained('tags')->onDelete('CASCADE');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_tags');
    }
};