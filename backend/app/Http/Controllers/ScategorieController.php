<?php

namespace App\Http\Controllers;

use App\Models\Scategorie;
use Illuminate\Http\Request;

class ScategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $scategories=Scategorie::with("categorie")->get();
            return response()->json($scategories);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
            //throw $th;
        }
        

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $scategorie=new Scategorie([
                "nomscategorie"=> $request->input("nomscategorie"),
                "imagescategorie"=> $request->input("imagescategorie"),
                "categorieID"=> $request->input("categorieID"),

            ]);
            $scategorie->save();
            return response()->json($scategorie);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
            //throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $scategorie = Scategorie::with("categorie")->findOrFail($id);
            return response()->json($scategorie);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
            //throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $scategorie = Scategorie::findOrFail($id);
            $scategorie->update($request->all());
            return response()->json($scategorie);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
            //throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $scategorie= Scategorie::findOrFail($id);
            $scategorie->delete();
            return response()->json("scategorie supprimée avec succés");
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
            //throw $th;
        }
    }
}
