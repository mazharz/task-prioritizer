# Task prioritizer

This is a web app inspired by Sarah Drasner's task prioritizing technique.

# To-do

- [x] handle ids
- [x] create container box per category
- [x] add a way to remove tasks & categories
- [x] add colors and make things pretty
- [x] handle drag and drop tasks into their category
- [x] deploy to GitHub pages
- [x] add GitHub logo linked to the repo in the header
- [x] Change description title to html5 dialog
- [x] make task disabled (not draggable & not addable via any method) if it appears in all categories
- [x] add button to remove tasks
  - [x] use svg icon for remove category and tasks
  - [x] must remove all mappings w/ a certain task that is removed
  - [x] also must remove all mappings w/ a certain category that is removed
- [ ] add button to add task/category
- [ ] add reverse drag to remove from category (in addition to the current click to remove)
- [ ] rank tasks via their number of usages (preferably increase their color saturation)
  - [ ] this might need you to make a color class that has a method to format into hsl with individual fields too
- [ ] add keyboard support to be able to do everything via keyboard (Duolingo-like)
- [ ] add animations (and preferably SVG animations)
