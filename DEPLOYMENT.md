# Развёртывание на GitHub Pages

## Автоматическое развёртывание (GitHub Actions)

Проект настроен для автоматической публикации на GitHub Pages при пуше в ветку `main`.

### Настройка

1. **Создайте репозиторий на GitHub** (если ещё не создан)

2. **Инициализируйте git и запушьте код:**
   ```bash
   cd vk-its
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

3. **Включите GitHub Pages:**
   - Перейдите в **Settings** → **Pages** вашего репозитория
   - В разделе **Build and deployment**:
     - **Source**: Выберите `GitHub Actions`
   - Workflow автоматически запустится после пуша

4. **После успешного развёртывания** сайт будет доступен по адресу:
   ```
   https://USERNAME.github.io/REPO/
   ```

## Структура workflow

Файл `.github/workflows/deploy.yml` выполняет:

1. **Checkout** — загрузка исходного кода
2. **Setup Node.js** — установка Node.js 20 с кэшированием зависимостей
3. **Install dependencies** — установка зависимостей (`npm ci`)
4. **Build** — сборка проекта (`npm run build`)
5. **Upload artifact** — загрузка артефакта сборки
6. **Deploy** — публикация на GitHub Pages (только для ветки `main`)

## Локальная сборка

Для тестирования сборки локально:

```bash
npm run build
npm run preview
```

## Ручное развёртывание

Если нужно развернуть вручную без GitHub Actions:

```bash
# Сборка
npm run build

# Публикация через gh-pages
npm install -D gh-pages
npx gh-pages -d dist
```

## Переменные окружения

При необходимости добавьте переменные окружения в workflow:

```yaml
env:
  VITE_API_URL: https://api.example.com
```

## Troubleshooting

### Сборка не проходит
- Проверьте логи workflow в **Actions** → **Build and Deploy**
- Убедитесь, что все зависимости установлены
- Проверьте TypeScript ошибки: `npm run build`

### Страница не отображается
- Проверьте консоль браузера на ошибки
- Убедитесь, что пути к ресурсам корректны
- Проверьте, что `dist/index.html` существует после сборки

### Кэширование
Для сброса кэша GitHub Pages:
- Измените версию в `package.json`
- Или отключите/включите GitHub Pages в настройках
