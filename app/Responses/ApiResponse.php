<?php

namespace App\Responses;

use Illuminate\Http\Response;

trait ApiResponse
{
    protected function succesResponse($data , $message = null , $code = Response::HTTP_OK){
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function erreurResponse($message = null , $code = Response::HTTP_BAD_REQUEST){
       return response()->json([
            'success' => false,
            'message' => $message
        ], $code); 
    }

    protected function unauthorizedResponse($message = null){
        return $this->erreurResponse(null, $message, Response::HTTP_UNAUTHORIZED);
    }
}


