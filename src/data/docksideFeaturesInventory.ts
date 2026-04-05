/**
 * Dockside feature spec for /features — user-facing copy + Tabler icon names per row.
 */

export interface DocksideFeatureItem {
  name: string;
  description: string;
  /** Tabler icon id, e.g. tabler:check */
  icon: string;
  /** Extra context: limits, tips, or why it matters */
  highlight?: string;
}

export interface DocksideFeatureSection {
  id: string;
  title: string;
  /** Tabler icon for this category block */
  sectionIcon: string;
  intro?: string;
  items: DocksideFeatureItem[];
}

export const docksideFeatureSections: DocksideFeatureSection[] = [
  {
    id: 'core-shelf',
    sectionIcon: 'tabler:layout-sidebar-right-expand',
    title: 'Main Shelf: Files Shelf',
    intro: 'The drag-and-drop shelf beside the Dock—files, folders, notes, and hand-offs in one strip.',
    items: [
      {
        icon: 'tabler:hand-rock',
        name: 'Drag-and-drop shelf beside the Dock',
        description:
          'Keep files, folders, notes, screenshots, downloads, and more within easy reach of the Dock.',
        highlight: 'Stays handy without covering your main windows.',
      },
      {
        icon: 'tabler:mouse-2',
        name: 'Smart drag activation',
        description: 'Open the shelf when a drag starts, when you’re near the shelf, or near the pointer—your choice.',
        highlight: 'More flexible than a single fixed drop strip.',
      },
      {
        icon: 'tabler:adjustments-horizontal',
        name: 'Adjustable drag sensitivity',
        description: 'Tune activation delay and drop-zone height so opens feel fast—or harder to trigger by accident.',
      },
      {
        icon: 'tabler:folder-plus',
        name: 'Add from Finder, clipboard, or history',
        description: 'Pull items in from Finder, the clipboard, or Dockside’s recent history.',
      },
      {
        icon: 'tabler:link',
        name: 'Store by reference or copy',
        description: 'Either keep a lightweight link to the original file, or store a real copy in Dockside’s space.',
        highlight: 'Pick what fits your workflow: aliases vs self-contained copies.',
      },
      {
        icon: 'tabler:arrow-right-bar',
        name: 'Optional move into the shelf',
        description: 'Instead of copying, move the original file into the shelf flow when you want the shelf to “own” it.',
      },
      {
        icon: 'tabler:drag-drop',
        name: 'Drag out to Finder, apps, or folders',
        description: 'Drag anything back out into Finder, another app, a folder, or another tool.',
        highlight: 'Meant as a temp workspace, not a dead-end pile.',
      },
      {
        icon: 'tabler:trash-off',
        name: 'Remove after drag-out',
        description: 'Optionally clear an item from the shelf as soon as you drag it out.',
        highlight: 'Nice for quick hand-offs.',
      },
      {
        icon: 'tabler:eye',
        name: 'Stay visible while the shelf has items',
        description: 'If you use auto-hide, Dockside can stay on screen until the Files shelf is empty.',
      },
      {
        icon: 'tabler:chevrons-right',
        name: 'Expand and page through items',
        description: 'Show more than fits in the compact strip—expand and flip through pages of items.',
      },
      {
        icon: 'tabler:search',
        name: 'Search on the shelf',
        description: 'Search and filter what’s on the shelf right from the shelf UI.',
      },
    ],
  },
  {
    id: 'organize-workflows',
    sectionIcon: 'tabler:folders',
    title: 'Files, notes & workflows',
    intro: 'Split file areas, folder watch, notes, App Drawer, and moving items between areas. Drop-zone automation is documented in its own section below.',
    items: [
      {
        icon: 'tabler:layout-columns',
        name: 'Multiple Files areas',
        description: 'Split the Files shelf into separate areas (columns), each with its own role.',
        highlight: 'Up to three active file areas.',
      },
      {
        icon: 'tabler:tag',
        name: 'Name and icon per area',
        description: 'Give each area its own label and SF Symbol so you can tell them apart at a glance.',
      },
      {
        icon: 'tabler:color-filter',
        name: 'Tag filters per area',
        description: 'Route or show items by Finder color tags, per area.',
        highlight: 'Match areas to how you actually work.',
      },
      {
        icon: 'tabler:folder-open',
        name: 'Folder watch per area',
        description: 'Each area can watch a folder and add new files that match your rules.',
      },
      {
        icon: 'tabler:filter',
        name: 'Watch folders with exclusions',
        description: 'Set how deep to scan, which files to skip, and which subfolders to ignore.',
        highlight: 'Wildcard-style patterns for messy real folders.',
      },
      {
        icon: 'tabler:sort-descending',
        name: 'How many items and sort order',
        description: 'Cap how many items show, and whether newest land at the start or end (based on shelf layout).',
      },
      {
        icon: 'tabler:stack-2',
        name: 'Auto-stacks',
        description: 'Drop several items at once—or onto another item—to form a stack automatically.',
      },
      {
        icon: 'tabler:layers-intersect',
        name: 'Manual stacks',
        description: 'Group a selection into a stack, or break stacks apart later.',
        highlight: 'Temporary bundles without making a new folder.',
      },
      {
        icon: 'tabler:folder-plus',
        name: 'New folder from selection',
        description: 'Turn selected shelf items into a new folder in one step.',
      },
      {
        icon: 'tabler:copy',
        name: 'Duplicate items',
        description: 'Duplicate selected items (except notes) straight from the shelf.',
      },
      {
        icon: 'tabler:history',
        name: 'History & restore',
        description: 'Bring back files from Dockside history or undo recent removals.',
        highlight: 'Harder to lose track of something you just had on the shelf.',
      },
      {
        icon: 'tabler:click',
        name: 'Quick actions on hover',
        description: 'Optional buttons on hover—e.g. copy path or reveal in Finder.',
      },
      {
        icon: 'tabler:sparkles',
        name: 'Status hints on icons',
        description: 'Optional badges: recent dot, “optimized” marker, or a simple age bar.',
      },
      {
        icon: 'tabler:note',
        name: 'Notes on the shelf',
        description: 'A dedicated notes strip inside the Files shelf.',
      },
      {
        icon: 'tabler:file-plus',
        name: 'New note without leaving the flow',
        description: 'Create a note from Dockside while you’re doing something else.',
      },
      {
        icon: 'tabler:file-text',
        name: 'Plain text, RTF, Markdown, Bike, or custom',
        description: 'Notes aren’t locked to one format—pick what you use.',
      },
      {
        icon: 'tabler:apps',
        name: 'Choose the default notes app',
        description: 'Open notes in the editor you prefer.',
      },
      {
        icon: 'tabler:folder-cog',
        name: 'Where notes live & cleanup',
        description: 'Pick storage, cap how many notes you keep, auto-delete old ones, and open the notes folder.',
      },
      {
        icon: 'tabler:layout-grid',
        name: 'App Drawer',
        description: 'Optional launcher strip for favorite apps and shortcuts, inside the Files shelf.',
      },
      {
        icon: 'tabler:arrows-exchange',
        name: 'Drag between areas',
        description: 'With multiple areas, drag targets update so you can move items between them cleanly.',
      },
    ],
  },
  {
    id: 'drop-zones-workflow',
    sectionIcon: 'tabler:automation',
    title: 'Drop Zones: Workflow Automation',
    intro:
      'Configurable drop zones along the shelf replace a single anonymous drop target. Each zone has its own icon, name, file-type rule, primary action, destination, post-drop behavior, and on/off state—mirroring the in-app settings table.',
    items: [
      {
        icon: 'tabler:box-multiple',
        name: 'Up to eight drop zones',
        description:
          'Define up to eight zones that appear as separate targets when you drag files toward the shelf.',
        highlight: 'Eight slots in the current app; unused slots can stay set to None.',
      },
      {
        icon: 'tabler:layout-list',
        name: 'Default behavior when no zones are set',
        description:
          'If you leave every zone unset (or inactive), Dockside falls back to the normal flow: expand and accept drops onto the Files shelf like a single landing area.',
      },
      {
        icon: 'tabler:hand-grab',
        name: 'Zones appear while dragging',
        description:
          'When at least one zone is configured and active, the zone strip is shown during a drag so you can aim at a specific automation instead of the generic shelf.',
      },
      {
        icon: 'tabler:typography',
        name: 'Custom zone name',
        description: 'Each row has its own label (e.g. “Copy To Downloads”, “Preview”, “Generate Link”) so you can read what will happen before you drop.',
      },
      {
        icon: 'tabler:photo',
        name: 'Custom zone icon',
        description: 'Assign a distinct icon per zone so the strip stays scannable at a glance.',
      },
      {
        icon: 'tabler:filter',
        name: 'File type filter (Type column)',
        description:
          'Restrict what a zone accepts—for example Any file, or narrower kinds such as text, Office documents, PDFs, images, video, audio, plus custom extensions.',
      },
      {
        icon: 'tabler:ban',
        name: 'Primary action: None',
        description: 'Reserve or clear a slot: no automation runs when something is dropped on that zone.',
      },
      {
        icon: 'tabler:brand-apple',
        name: 'Primary action: Shortcut',
        description: 'Run a macOS Shortcut when a matching file lands on the zone; pick the Shortcut in the destination field (e.g. Quick Look Preview).',
      },
      {
        icon: 'tabler:mail',
        name: 'Primary action: Email',
        description: 'Trigger an email flow with the dropped file (new message / attachment handoff, per app wiring).',
      },
      {
        icon: 'tabler:copy',
        name: 'Primary action: Copy to…',
        description: 'Copy the dropped item into a folder you choose; set the path in the destination column (browse / “…” picker).',
      },
      {
        icon: 'tabler:folder-share',
        name: 'Primary action: Move to…',
        description: 'Move the dropped item into a chosen folder; destination uses the same path picker pattern as Copy to….',
      },
      {
        icon: 'tabler:script',
        name: 'Primary action: AppleScript',
        description: 'Execute an AppleScript, passing the dropped file as context.',
      },
      {
        icon: 'tabler:terminal-2',
        name: 'Primary action: Shell script',
        description: 'Run a shell script with the dropped file available to the script.',
      },
      {
        icon: 'tabler:command',
        name: 'Primary action: Run CLI command',
        description: 'Run a command-line invocation with the dropped item as input or argument, as configured.',
      },
      {
        icon: 'tabler:bolt',
        name: 'Primary action: Utilities',
        description:
          'Use built-in utility actions—the same catalog as File-specific utilities (shareable links, compression, metadata strip, etc.). The destination column lists the specific utility (for example Shareable Link).',
      },
      {
        icon: 'tabler:map-pin',
        name: 'Destination / parameter column',
        description:
          'Secondary field per action: folder paths for Copy/Move, named Shortcut for Shortcut actions, or the concrete utility / script identifier for Utilities, AppleScript, shell, and CLI.',
      },
      {
        icon: 'tabler:minus',
        name: 'Post-drop: None',
        description: 'After the primary action finishes, leave the file’s shelf state unchanged beyond what the action itself did.',
      },
      {
        icon: 'tabler:inbox',
        name: 'Post-drop: Keep in shelf',
        description: 'Retain the item on the Files shelf after the zone action completes.',
      },
      {
        icon: 'tabler:copy',
        name: 'Post-drop: Copy to…',
        description: 'After the primary action, copy the file to another configured folder.',
      },
      {
        icon: 'tabler:folder-share',
        name: 'Post-drop: Move to…',
        description: 'After the primary action, move the file to another configured folder.',
      },
      {
        icon: 'tabler:trash',
        name: 'Post-drop: Move to Bin',
        description: 'After the primary action, send the item to the Trash.',
      },
      {
        icon: 'tabler:trash-x',
        name: 'Post-drop: Permanently delete',
        description: 'After the primary action, delete the item permanently (use with care).',
      },
      {
        icon: 'tabler:circle-check',
        name: 'Active toggle per zone',
        description: 'Turn a zone on or off without losing its name, icon, type, action, destination, and post-drop settings.',
      },
      {
        icon: 'tabler:circle-x',
        name: 'Remove zone configuration',
        description: 'Clear a row (e.g. ✕) to delete that zone’s setup and free the slot.',
      },
    ],
  },
  {
    id: 'file-utilities',
    sectionIcon: 'tabler:tool',
    title: 'File-specific utilities',
    intro:
      'Each row is one capability. Available from shelf menus and hover actions (where enabled), and assignable as drop-zone actions.',
    items: [
      {
        icon: 'tabler:file-zip',
        name: 'Compress to ZIP',
        description: 'Create a ZIP archive from one or more selected items on the shelf.',
      },
      {
        icon: 'tabler:archive',
        name: 'Extract archive (unzip)',
        description: 'Expand ZIP (and supported archives) from an item on the shelf.',
      },
      {
        icon: 'tabler:file-type-pdf',
        name: 'PDF from images',
        description: 'Build a PDF from supported image types in a couple of steps, without leaving the shelf.',
      },
      {
        icon: 'tabler:shield-check',
        name: 'Strip photo metadata',
        description: 'Remove EXIF, location, and related metadata from images before sharing or archiving.',
      },
      {
        icon: 'tabler:writing',
        name: 'Rename',
        description: 'Rename files from the shelf with Finder-style naming, in place.',
      },
      {
        icon: 'tabler:folder-up',
        name: 'Move on disk',
        description: 'Move the selected item to another folder or location on disk from the shelf (Finder-equivalent move).',
      },
      {
        icon: 'tabler:copy',
        name: 'Copy to configured folder',
        description: 'Copy the selection into a folder you’ve saved in settings—one action, no browsing.',
      },
      {
        icon: 'tabler:folder-share',
        name: 'Move to configured folder',
        description: 'Move the selection into a folder you’ve saved in settings.',
      },
      {
        icon: 'tabler:send',
        name: 'AirDrop',
        description: 'Send the selection via AirDrop when the system offers it.',
      },
      {
        icon: 'tabler:message',
        name: 'Messages',
        description: 'Send files through Messages from shelf utilities.',
      },
      {
        icon: 'tabler:mail',
        name: 'Mail',
        description: 'Hand off the selection into Mail (e.g. new message with attachment) from shelf actions.',
      },
      {
        icon: 'tabler:notebook',
        name: 'Notes',
        description: 'Send or share into Notes via the standard macOS share flow from the shelf.',
      },
      {
        icon: 'tabler:share',
        name: 'Share sheet (other extensions)',
        description:
          'Open the standard macOS Share sheet for targets not listed above—other apps, services, and third-party Share extensions.',
      },
      {
        icon: 'tabler:link-plus',
        name: 'Quick share links',
        description: 'Create short-lived upload links (e.g. via 0x0) for a fast one-off share.',
      },
      {
        icon: 'tabler:photo-circle',
        name: 'Clop',
        description: 'Optimize images, video, and PDFs with Clop when installed—manual runs or automation hooks.',
      },
      {
        icon: 'tabler:cloud-upload',
        name: 'Dropshare',
        description: 'Upload via Dropshare from shelf menus or utility actions when Dropshare is installed.',
      },
      {
        icon: 'tabler:brand-apple',
        name: 'Shortcuts',
        description: 'Run a Shortcut as a shelf or drop-zone action against the current selection.',
      },
      {
        icon: 'tabler:folder',
        name: 'Finder integration',
        description: 'Finder Sync extension; reveal in Finder, open in Finder, and related path/copy helpers.',
      },
    ],
  },
  {
    id: 'screenshots-clipboard',
    sectionIcon: 'tabler:photo-down',
    title: 'Second Shelf: Screenshots and Downloads Shelf',
    intro:
      'A customisable second strip—screenshots, Downloads, Recents, clipboard history, music controls, or system readouts.',
    items: [
      {
        icon: 'tabler:layout-distribute-horizontal',
        name: 'A second shelf',
        description:
          'A separate customisable strip alongside the Main Shelf: Files Shelf—for screenshots, downloads, and related flows.',
      },
      {
        icon: 'tabler:layout',
        name: 'What the second shelf shows',
        description: 'Classic two-pane files, compact media controls, or live system modules—switch per your setup.',
      },
      {
        icon: 'tabler:switch-horizontal',
        name: 'What each pane can be',
        description: 'Each side can be screenshots, images, a watched folder, clipboard history, Downloads, or Recents.',
      },
      {
        icon: 'tabler:separator-horizontal',
        name: 'Adjust the split',
        description: 'Drag the divider to set how much space each pane uses.',
      },
      {
        icon: 'tabler:camera',
        name: 'Screenshot folder watch',
        description: 'Follow your screenshots folder—or any folder—with depth and ignore rules.',
      },
      {
        icon: 'tabler:download',
        name: 'Downloads folder watch',
        description: 'Same for Downloads or any folder you choose.',
      },
      {
        icon: 'tabler:clock',
        name: 'Recents',
        description: 'Show macOS Recents with limits and apps you want excluded.',
      },
      {
        icon: 'tabler:clipboard',
        name: 'Clipboard history',
        description: 'Keep a running history of clipboard items, backed by the shelf.',
        highlight: 'Handy when you copy more than one thing in a row.',
      },
      {
        icon: 'tabler:category',
        name: 'What clipboard captures',
        description: 'Toggle images, screenshots, plain text, links, and files independently.',
      },
      {
        icon: 'tabler:cut',
        name: 'Narrow clipboard capture',
        description: 'In image modes, only new screenshots or only copied images—instead of full clipboard history.',
      },
      {
        icon: 'tabler:ban',
        name: 'Clipboard exclusions',
        description: 'Skip certain apps, pasteboard types, or lines matching a regex.',
      },
      {
        icon: 'tabler:tags',
        name: 'Tag filters here too',
        description: 'Screenshots and download panes can filter by Finder color tags.',
      },
      {
        icon: 'tabler:numbers',
        name: 'Limits per pane',
        description: 'Cap how many screenshots, downloads, recents, or clipboard entries you retain.',
      },
      {
        icon: 'tabler:calendar-time',
        name: 'Auto-delete by age',
        description: 'Drop older screenshots or downloads automatically after a set time.',
      },
      {
        icon: 'tabler:music',
        name: 'Now playing',
        description: 'Swap the shelf for compact Spotify or Apple Music controls.',
      },
      {
        icon: 'tabler:activity',
        name: 'System readouts',
        description: 'CPU, memory, disk, network, battery, clock, uptime, thermal—compact widgets.',
      },
    ],
  },
  {
    id: 'previews-utilities',
    sectionIcon: 'tabler:eye-spark',
    title: 'Previews',
    intro: 'Peek files, folders, stacks, and links before you open them—without digging through menus.',
    items: [
      {
        icon: 'tabler:eye',
        name: 'Hover previews',
        description: 'Peek at a file from the shelf before you open it.',
      },
      {
        icon: 'tabler:maximize',
        name: 'Quick Look',
        description: 'Open full Quick Look from the shelf, with keyboard shortcuts.',
      },
      {
        icon: 'tabler:adjustments',
        name: 'Preview settings',
        description: 'Change preview size, delay, or use an alternate PDF preview if you prefer.',
      },
      {
        icon: 'tabler:photo',
        name: 'Thumbnails & link icons',
        description: 'Optional thumbnails for files and favicons for saved links (experimental).',
      },
      {
        icon: 'tabler:files',
        name: 'Previews for more than “a file”',
        description: 'PDFs, folders, stacks, long text, video, and web links.',
      },
      {
        icon: 'tabler:link',
        name: 'Links as first-class items',
        description: 'Drop or paste URLs; Dockside can show a favicon or page title when available.',
      },
    ],
  },
  {
    id: 'dock-customization',
    sectionIcon: 'tabler:layout-bottombar',
    title: 'Dock & appearance',
    intro: 'Line up with the Dock, span displays, and tune how Dockside looks and hides.',
    items: [
      {
        icon: 'tabler:anchor',
        name: 'Dock-aware placement',
        description: 'Follow the Dock edge automatically, or pin Dockside to the left, right, or bottom.',
      },
      {
        icon: 'tabler:devices',
        name: 'Multiple displays',
        description: 'Follow the active screen or lock Dockside to one monitor.',
        highlight: 'Helpful on desk setups with two or more displays.',
      },
      {
        icon: 'tabler:arrows-move',
        name: 'Jump screen while dragging',
        description: 'In supported modes, Dockside can move to the display where your drag began.',
      },
      {
        icon: 'tabler:dimensions',
        name: 'Shelf size',
        description: 'Let width and height follow the Dock, or set them yourself.',
      },
      {
        icon: 'tabler:refresh',
        name: 'Adapts when the Dock moves',
        description: 'Resize and reposition when Dock size or screen layout changes.',
      },
      {
        icon: 'tabler:palette',
        name: 'Shelf styles',
        description: 'Transparent, Dock-style material, or solid opaque.',
      },
      {
        icon: 'tabler:droplet',
        name: 'Dock-style strength',
        description: 'Tune how strong the “Dock-like” blur and tint feel—including heavier opaque variants.',
      },
      {
        icon: 'tabler:sun-moon',
        name: 'Light, dark, or match System',
        description: 'Set Dockside’s theme separately from macOS, including a dark-first option.',
      },
      {
        icon: 'tabler:paint',
        name: 'Custom opaque colors',
        description: 'Pick shelf fill, optional outline, and outline color in opaque mode.',
      },
      {
        icon: 'tabler:eye-off',
        name: 'Hide & fade',
        description: 'Auto-hide and/or fade so the Dock strip stays calm when you’re not using it.',
      },
      {
        icon: 'tabler:message-2',
        name: 'Hints & ornaments',
        description: 'Toggle empty-state hints and decorative shelf trim.',
      },
      {
        icon: 'tabler:typography',
        name: 'Labels & icon size',
        description: 'Readable names vs dense icons—your call.',
      },
      {
        icon: 'tabler:layout-sidebar',
        name: 'Hide with the Dock',
        description: 'When the Dock auto-hides, Dockside can hide in sync.',
      },
      {
        icon: 'tabler:chevron-up',
        name: 'Show with the Dock',
        description: 'Optionally reveal Dockside whenever the Dock peeks out.',
      },
      {
        icon: 'tabler:layers-linked',
        name: 'One shelf or both',
        description: 'Decide whether Dock reveal affects only one shelf or every shelf.',
      },
      {
        icon: 'tabler:clock-hour-4',
        name: 'Timing',
        description: 'Fine-tune Dock auto-hide timing and Dockside’s own delay.',
      },
      {
        icon: 'tabler:command',
        name: 'Dock controls in settings',
        description: 'Toggle Dock hide, magnification, open Dock settings, or restart the Dock.',
      },
      {
        icon: 'tabler:app-window',
        name: 'Full-screen apps',
        description: 'Detect full-screen apps and keep a list of apps to ignore.',
      },
    ],
  },
  {
    id: 'integrations-ecosystem',
    sectionIcon: 'tabler:plug-connected',
    title: 'Integrations',
    intro:
      'Ways Dockside connects to the rest of macOS and third-party tools. Flows can be inbound (into the shelf), outbound (Dockside hands files to another app), or both. Copy-paste URL examples and a longer Integration User Guide are on /integrations.',
    items: [
      {
        icon: 'tabler:book',
        name: 'Integration User Guide (/integrations)',
        description:
          'Step-by-step instructions for developers and power users: registered URL actions, Services, and command-line patterns. Pairs with this spec for a full picture.',
      },
      {
        icon: 'tabler:link',
        name: 'Custom URL: add file or folder to shelf',
        description:
          'dockside://action/add?file=path/to/file — adds the given file or folder to the Files shelf. Suitable for scripts, other apps, and Launcher utilities that can open URLs.',
      },
      {
        icon: 'tabler:eraser',
        name: 'Custom URL: clear Files shelf',
        description:
          'dockside://action/clear-files-shelf — removes all items from the Files shelf. Same automation surface as the add action.',
      },
      {
        icon: 'tabler:terminal-2',
        name: 'Command line: open -a Dockside with a path',
        description:
          'open -a Dockside.app "/path/to/file" — hands a file or folder to Dockside from Terminal, launchd jobs, or any tool that can invoke open(1).',
      },
      {
        icon: 'tabler:command',
        name: 'Command line: open a dockside:// URL',
        description:
          'open "dockside://action/add?file=path/to/file" and open "dockside://action/clear-files-shelf" — shell-friendly variants of the custom URL actions.',
      },
      {
        icon: 'tabler:puzzle',
        name: 'macOS Service: Add to Dockside',
        description:
          'Registered system Service so other apps can send content in: files, folders, URLs, or plain text supplied via NSPasteboard. The receiving app calls Dockside; no custom URL required in every case.',
      },
      {
        icon: 'tabler:cursor-text',
        name: 'PopClip → Dockside (selected text)',
        description:
          'PopClip extension sends the current text selection to the shelf using the Add to Dockside Service flow—Inbound from the PopClip ecosystem.',
        highlight: 'Third-party extension; install from PopClip’s extension directory.',
      },
      {
        icon: 'tabler:photo-circle',
        name: 'Clop ↔ Dockside (two-way)',
        description:
          'Outbound: Dockside can optimise images, video, and PDFs on the shelf via Clop when Clop is installed (see File-specific utilities). Inbound: Clop can push optimised items back to Dockside using the same open / dockside:// patterns documented on lowtechguys.com (Clop integration).',
      },
      {
        icon: 'tabler:cloud-upload',
        name: 'Dropshare (Dockside → cloud)',
        description:
          'Upload files from the shelf through Dropshare when installed—links and destinations follow Dropshare’s supported services (29+ cloud targets per Dropshare). Primarily an outbound hand-off from Dockside.',
      },
      {
        icon: 'tabler:brand-apple',
        name: 'Shortcuts (two-way automation)',
        description:
          'Outbound: Dockside runs macOS Shortcuts from drop zones and utility actions. Inbound: Shortcuts, Automator, and other tools can add or clear shelf content by opening dockside:// URLs or using open -a Dockside with paths—same contract as the Integration User Guide.',
      },
      {
        icon: 'tabler:share',
        name: 'Share sheet & Share extensions',
        description:
          'Dockside hands files to the system Share UI and third-party Share extensions from shelf actions (see File-specific utilities). Outbound only from Dockside’s side; targets are whatever macOS lists.',
      },
      {
        icon: 'tabler:folder',
        name: 'Finder Sync extension',
        description:
          'Finder-adjacent behaviour (reveal, open, sync extension) is detailed under File-specific utilities; listed here so Finder appears in the integrations map.',
      },
    ],
  },
  {
    id: 'power-support',
    sectionIcon: 'tabler:keyboard',
    title: 'Shortcuts, license & privacy',
    intro: 'Keyboard control, startup, updates, license, languages, and how your data is treated.',
    items: [
      {
        icon: 'tabler:keyboard',
        name: 'Familiar shortcuts',
        description: 'Select all, copy, paste, delete, new note, Quick Look—similar to Finder.',
      },
      {
        icon: 'tabler:command',
        name: 'Your own global shortcuts',
        description: 'Toggle auto-hide or expand/collapse shelves from anywhere.',
      },
      {
        icon: 'tabler:key',
        name: 'Modifier keys while dragging',
        description: 'Hold keys when dragging in or out to remove, move instead of copy, force copy, skip reveal, or ignore the drag.',
        highlight: 'Power-user controls once muscle memory kicks in.',
      },
      {
        icon: 'tabler:login',
        name: 'Open at login',
        description: 'Start Dockside when you sign in to your Mac.',
      },
      {
        icon: 'tabler:layout-navbar',
        name: 'Menu bar',
        description: 'Optional menu bar icon, tips popover, and dropping onto the menu bar.',
      },
      {
        icon: 'tabler:volume',
        name: 'Sounds',
        description: 'Optional audio feedback for shelf actions.',
      },
      {
        icon: 'tabler:refresh-dot',
        name: 'Updates',
        description: 'Automatic update checks plus a “Check now” action.',
      },
      {
        icon: 'tabler:shield-lock',
        name: 'Permissions',
        description: 'Shortcuts to open or reset the macOS permissions Dockside needs.',
      },
      {
        icon: 'tabler:brand-apple',
        name: 'Native Mac app',
        description: 'Built with Apple’s frameworks for a proper desktop fit.',
      },
      {
        icon: 'tabler:lock',
        name: 'Privacy',
        description: 'No collection or sale of your data; online use is mainly for license checks.',
      },
      {
        icon: 'tabler:currency-dollar',
        name: 'One-time license',
        description: 'Pay once (currently US $5.99 in the app) to unlock.',
      },
      {
        icon: 'tabler:devices',
        name: 'Three Macs',
        description: 'Use on up to three computers; adding a new one may roll the oldest seat.',
      },
      {
        icon: 'tabler:lifebuoy',
        name: 'Ongoing support',
        description: 'Help is included with your license.',
      },
      {
        icon: 'tabler:messages',
        name: 'Help inside the app',
        description: 'Discord, email, feature requests, changelog, tips, and links out to more info.',
      },
      {
        icon: 'tabler:language',
        name: 'Languages',
        description: 'English, German, Spanish, Japanese, Korean, Polish, and Simplified Chinese.',
      },
    ],
  },
];

export interface DocksideFeatureAccuracyNote {
  topic: string;
  detail: string;
}

/** Internal reference (not shown on /features today). */
export const docksideFeatureAccuracyNotes: DocksideFeatureAccuracyNote[] = [
  { topic: 'Files shelf areas', detail: 'Current code supports up to three active file areas (not four).' },
  { topic: 'Drop zones', detail: 'Up to eight configurable drop zones. Some in-app copy may still mention four.' },
  { topic: 'Clipboard history size', detail: 'Clipboard History supports presets up to 200 items.' },
  {
    topic: 'Toggles shelf mode',
    detail: 'A customizable Toggles mode exists in code but is gated off—do not market unless you ship it enabled.',
  },
  {
    topic: 'Continuity Camera',
    detail: 'Implementation exists but is intentionally disabled—omit from public lists until enabled.',
  },
  {
    topic: 'PopClip',
    detail: 'Third-party PopClip extension; uses Add to Dockside Service per public integrations page—not first-party Dockside code.',
  },
  { topic: 'OCR / text extraction', detail: 'Not confirmed as a shipped feature in the current codebase.' },
  { topic: 'Reddit support', detail: 'Not confirmed among current in-app support links.' },
];
