<?php

declare(strict_types=1);

namespace App\Model;

class Palestrante extends AbstractModel
{
    protected static string $table = 'palestrantes';

    public string $nome;
    public string $email;
    public string $especialidade;

    public static function delete(int $id): void
    {
        $sql = "DELETE FROM palestrantes WHERE id = :id";
        parent::db()->prepare($sql)->execute([':id' => $id]);
    }
}
