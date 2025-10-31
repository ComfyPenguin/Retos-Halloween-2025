# Retos de Halloween 🎃

Retos de programación en TypeScript de MiduDev para Halloween 2025.

[⛓️‍💥 Ver retos](https://www.halloween.dev/es)

## Reto #1: 👹 La posesión del código

[⛓️‍💥 Reto](https://www.halloween.dev/es/retos/2025/1)

[✅ Solución](Retos/Reto1.ts)

### Enunciado

Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, **invierte completamente las palabras que dice**, pero mantiene el orden de las frases.

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

---

## Reto #2: 🐑 Cuenta las ovejas...

[⛓️‍💥 Reto](https://www.halloween.dev/es/retos/2025/2)

[✅ Solución](Retos/Reto2.ts)

### Enunciado

Es medianoche en **Elm Street** y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente **desordenadas por culpa de Freddy**.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

**Tu misión:** Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función ``countSheep(letters)`` que:

- Reciba un string con letras desordenadas
- Cuente cuántas veces se puede formar la palabra "sheep"
- Devuelva el número de ovejas completas que puedes contar

**Importante:** Para formar "sheep" necesitas: ``s``, ``h``, ``e``, ``e``, ``p`` (la ``'e'`` aparece 2 veces)

```typescript
countSheep('sheepxsheepy')
// → 2 (puedes formar "sheep" dos veces)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

countSheep('hola')
// → 0 (no hay suficientes letras)

countSheep('peesh')
// → 1 (las letras están desordenadas pero están todas)
```

---

## Reto #3: 🔪 Es viernes 13

[⛓️‍💥 Reto](https://www.halloween.dev/es/retos/2025/3)

[✅ Solución](Retos/Reto3.ts)

### Enunciado

Michael Myers ha dejado un patrón en su calendario…

Cada año ataca en noche de Halloween (31 de octubre) o en cualquier viernes 13.

**Tu misión es encontrar todas las noches de terror de un año concreto**🩸

Recibirás un año (por ejemplo 2025) y deberás devolver un array con todas las fechas en formato ``'YYYY-MM-DD'`` donde Michael Myers podría atacar.

- **Si no dan un año válido, devuelve un array vacío.**
- **Devuelve todas las fechas del año que sean 31 de octubre, y/o viernes 13.**
- **Las fechas deben estar ordenadas cronológicamente.**
- **El formato debe ser exactamente ``'YYYY-MM-DD'`` (con ceros a la izquierda si hace falta).**

```typescript
myersCalendar(2025)
// → ['2025-06-13', '2025-09-13', '2025-10-31']

myersCalendar(2026)
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

myersCalendar(2024)
// → ['2024-09-13', '2024-10-31', '2024-12-13']
```
