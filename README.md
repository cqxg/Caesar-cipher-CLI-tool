This is a small Caesar cipher CLI tool.

To use the program, clone the repository, and from its root (do not forget to do ``npm install``)  use the command  
``node src/program`` with the following options (shift & action are required!):

``-s``, ``--shift``: offset by number of symbols  
``-a``, ``--action``: an action encode / decode  
``-i``, ``--input``: an input file  
``-o``, ``--output``: an output file  

Examples that can to be entered into the command line:  

``node src/program -a encode -s 7 -i "./input.txt" -o "./output.txt"``  
``node src/program --action encode --shift 7``