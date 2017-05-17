using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BethanysPieShop.Migrations
{
    public partial class ShoppingCartItemsUpdated5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShoppingCartGuid",
                table: "ShoppingCartItems");

            migrationBuilder.DropColumn(
                name: "Temp",
                table: "ShoppingCartItems");

            migrationBuilder.AddColumn<string>(
                name: "ShoppingCartId",
                table: "ShoppingCartItems",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShoppingCartId",
                table: "ShoppingCartItems");

            migrationBuilder.AddColumn<string>(
                name: "ShoppingCartGuid",
                table: "ShoppingCartItems",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Temp",
                table: "ShoppingCartItems",
                nullable: false,
                defaultValue: 0);
        }
    }
}
