// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "boxes" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	let command_list = [
		{ "command": "extension.singleVerticalLine", "symbol": "│" },
		{ "command": "extension.singleVerticalAndLeftLine", "symbol": "┤" },
		{ "command": "extension.doubleLineVerticalAndLeft", "symbol": "╣" },
		{ "command": "extension.doubleVerticalLine", "symbol": "║" },
		{ "command": "extension.doubleLineUpperRightCorner", "symbol": "╗" },
		{ "command": "extension.doubleLineLowerRightCorner", "symbol": "╝" },
		{ "command": "extension.singleLineUpperRightCorner", "symbol": "┐" },
		{ "command": "extension.singleLineLowerLeftCorner", "symbol": "└" },
		{ "command": "extension.singleLineHorizontalAndUp", "symbol": "┴" },
		{ "command": "extension.singleLineHorizontalDown", "symbol": "┬" },
		{ "command": "extension.singleLineVerticalAndRight", "symbol": "├" },
		{ "command": "extension.singleHorizontalLine", "symbol": "─" },
		{ "command": "extension.singleLineHorizontalVertical", "symbol": "┼" },
		{ "command": "extension.doubleLineLowerLeftCorner", "symbol": "╚" },
		{ "command": "extension.doubleLineUpperLeftCorner", "symbol": "╔" },
		{ "command": "extension.doubleLineHorizontalAndUp", "symbol": "╩" },
		{ "command": "extension.doubleLineHorizontalDown", "symbol": "╦" },
		{ "command": "extension.doubleLineVerticalAndRight", "symbol": "╠" },
		{ "command": "extension.doubleHorizontalLine", "symbol": "═" },
		{ "command": "extension.doubleLineHorizontalVertical", "symbol": "╬" },
		{ "command": "extension.singleLineLowerRightCorner", "symbol": "┘" },
		{ "command": "extension.singleLineUpperLeftCorner", "symbol": "┌" },
		{ "command": "extension.fullBlock", "symbol": "█" },
		{ "command": "extension.lowerHalfBlock", "symbol": "▄" },
		{ "command": "extension.upperHalfBlock", "symbol": "▀" },
		{ "command": "extension.lowDensityDotted", "symbol": "░" },
		{ "command": "extension.mediumDensityDotted", "symbol": "▒" },
		{ "command": "extension.highDensityDotted", "symbol": "▓" }
	];

	command_list.forEach(cmd => {
		let disposable = vscode.commands.registerCommand(cmd.command, function () {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			// vscode.window.showInformationMessage('Hello World!');
			let editor = vscode.window.activeTextEditor;
			let selections = editor.selections;
			editor.edit(builder => {
				for (const selection of selections) {
					if(selection.end.character - selection.start.character == 0){
						builder.insert(selection.active, cmd.symbol);
					} else {
						builder.replace(selection, cmd.symbol);
					}
				}
			})
		});
		context.subscriptions.push(disposable);
	});

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
