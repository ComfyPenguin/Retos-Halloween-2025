# Retos de Halloween 🎃

6 retos de programación en TypeScript de MiduDev para Halloween

[⛓️‍💥 Ver retos](https://www.halloween.dev/es)

## Reto 1 - La posesión del código

[⛓️‍💥 Reto 1](https://www.halloween.dev/es/retos/2025/1)

### Enunciado

Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.

Por ejemplo:

```typescript
const message = 'i yojne gnihctaw uoy'
translatePossessed(message) // "i enjoy watching you"
```

Los espacios entre palabras deben mantenerse:

```typescript
const message = 'siht si gnorw'
translatePossessed(message) // "this is wrong"
```

Si el mensaje está vacío o solo contiene espacios, devuelve una cadena vacía:

```typescript
const message = '      '
translatePossessed(message) // ""
```

Las palabras pueden contener mayúsculas y minúsculas, y deben mantenerse:

```typescript
const message = 'dooG secitcarP'
translatePossessed(message) // "Good Practices"
```

[✅ Solución](Retos/Reto1.ts)

---
