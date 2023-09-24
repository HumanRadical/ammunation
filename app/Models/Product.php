<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['category'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['category'] ?? false, fn ($query, $category) =>
            $query->whereHas('category', fn ($query) =>
            $query->where('slug', $category))
        );

        $query->when($filters['minPrice'] ?? false, fn ($query, $minPrice) =>
            $query->where('price', '>=', $minPrice));
            
        $query->when($filters['maxPrice'] ?? false, fn ($query, $maxPrice) =>
            $query->where('price', '<=', $maxPrice));

        $query->when($filters['search'] ?? false, fn ($query, $search) =>
            $query->where(fn ($query) =>
                $query->where('name', 'like', '%' . $search . '%')
            )
        );
    }
}
