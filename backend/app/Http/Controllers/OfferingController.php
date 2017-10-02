<?php

namespace App\Http\Controllers;

use App\Offering;
use Illuminate\Http\Request;

class OfferingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Offering  $offering
     * @return \Illuminate\Http\Response
     */
    public function show(Offering $offering)
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Offering  $offering
     * @return \Illuminate\Http\Response
     */
    public function edit(Offering $offering)
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Offering  $offering
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Offering $offering)
    {
        var_dump(__METHOD__);
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Offering  $offering
     * @return \Illuminate\Http\Response
     */
    public function destroy(Offering $offering)
    {
        var_dump(__METHOD__);
        //
    }
}
