<?php

declare(strict_types=1);

namespace App\Model;

class Usuario extends AbstractModel
{
    protected static string $table = 'usuarios';

    public int $id;
    public string $nome;
    public string $email;
    public string $senha;
    public string $endereco = '';

    public function insert(): void
    {
        $sql = "INSERT INTO usuarios (nome, endereco, email, senha) VALUES (:nome, :endereco, :email, :senha)";

        parent::db()->prepare($sql)->execute([
            ':nome' => $this->nome,
            ':endereco' => $this->endereco,
            ':email' => $this->email,
            ':senha' => $this->senha,
        ]);
    }

    public static function delete(int $id): void
    {
        $sql = "DELETE FROM usuarios WHERE id = :id";
        parent::db()->prepare($sql)->execute([':id' => $id]);
    }
}

