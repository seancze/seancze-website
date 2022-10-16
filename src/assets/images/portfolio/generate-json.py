from os import walk

DIR_PATH = "../../assets/images/portfolio"
key_names = []
res = dict()
for i, (dirpath, dirnames, filenames) in enumerate(walk("./src/assets/images/portfolio")):
    if i == 0:
        key_names += dirnames
    else:
        key = key_names[i-1]
        order = 1
        filenames.sort()
        for el in filenames:
            if el == ".DS_Store":
                continue
            # skip if the name contains thumbnail, file will be edited manually
            if "thumbnail" in el:
                continue
            name_of_file = el.split(".")[0]
            # replace "-" with " " > join the array together > convert to titlecase
            name_formatted = " ".join(name_of_file.split("-")).title()
            image_path = f"{DIR_PATH}/{key}/{el}"
            res[key] = res.get(key, []) + [{
                    "image": image_path,
                    "thumbImage": image_path,
                    "title": name_formatted,
                    "alt": name_formatted
                    }
            ]
            order += 1


print(res)