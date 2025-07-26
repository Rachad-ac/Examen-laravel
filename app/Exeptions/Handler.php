<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    protected $levels = [
        // personnalisation possible
    ];

    protected $dontReport = [
        //
    ];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

   public function register(): void
{
    $this->renderable(function (Throwable $e, $request) {

        if ($request->expectsJson()) {

            if ($e instanceof ModelNotFoundException) {
                return response()->json([
                    'success' => false,
                    'message' => 'Ressource non trouvée.'
                ], 404);
            }

            if ($e instanceof ValidationException) {
                return response()->json([
                    'success' => false,
                    'message' => 'Erreur de validation.',
                    'errors' => $e->errors()
                ], 422);
            }

            return response()->json([
                'success' => false,
                'message' => 'Une erreur interne est survenue.',
                'exception' => class_basename($e),
                'details' => config('app.debug') ? $e->getMessage() : null
            ], method_exists($e, 'getStatusCode') ? $e->getStatusCode() : 500);
        }
    });
}

}
