<?php

namespace Database\Seeders;

use App\Models\Area;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class AreasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Llenar tabla cat_areas desde el archivo CSV
        $file = database_path('seeders/data/cat_areas.csv');
        if (!file_exists($file)) {
            // nothing to do if the file is missing
            return;
        }

        $file_read = fopen($file, 'r');
        if ($file_read === false) {
            return;
        }

        while (($row = fgetcsv($file_read, 0, ',')) !== false) {
            // Some CSV rows might be empty or have fewer columns than expected.
            // Expecting format: [code, name] -> indexes 0 and 1
            if (!isset($row[0]) || !isset($row[1])) {
                continue;
            }

            $code = trim($row[0]);
            $name = trim($row[1]);

            // Skip completely empty rows
            if ($code === '' && $name === '') {
                continue;
            }

            Area::create([
                'code' => $code,
                'name' => $name,
            ]);
        }

        fclose($file_read);
    }
}
