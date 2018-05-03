import generateId from '../constants/functions';
import menu  from '../models/menuModel';

class MenuController
{
    getMenu(req, res) {
        return res.status(200).json(menu);
    }

    postMenu(req, res){
        const nextId = generateId(menu);
        menu.push({"id":nextId, "caterer":req.body.caterer, "content":req.body.content});
        return res.status(200).json(menu);
    }

    putMenu(req, res){
        let foundMenu = false;
        menu.map((currentMenu, index)=> {
            if(currentMenu.id == req.params.id)
            {
                currentMenu.content = req.body.content;
                foundMenu = true;
            }

        })

        if(!foundMenu){
            return res.status(401).json("Menu with id {" + req.param.id + "} not found");
        }

        res.status(200).json(menu);
    }

    deleteMenu(req, res) {
        let foundMenu = false;
        menu.map((currentMenu, index)=> {
            if(currentMenu.id == req.params.id)
            {
                foundMenu = true;
                menu.splice(index, 1);
            }
                

        })

        if(!foundMenu){
            return res.status(401).json("Menu with id {" + req.param.id + "} not found");
        }

        res.status(200).json(menu);
    }

}

export default new MenuController();