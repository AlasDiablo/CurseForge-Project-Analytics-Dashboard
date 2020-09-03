module.exports = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        "url": "data/all.csv"
    },
    "width": 400,
    "height": 300,
    "layer": [
        {
            "encoding": {
                "x": {"field": "date", "type": "temporal"},
                "y": {"field": "download", "type": "quantitative"},
                "color": {"field": "name", "type": "nominal"},
                "tooltip": [
                    {"field": "date", "type": "temporal", "title": "Date"},
                ]
            },
            "layer": [
                {"mark": "line"},
                {
                    "selection": {
                        "label": {
                            "type": "single",
                            "nearest": true,
                            "on": "mouseover",
                            "encodings": ["x"],
                            "empty": "none"
                        }
                    },
                    "mark": "point",
                    "encoding": {
                        "opacity": {
                            "condition": {"selection": "label", "value": 1},
                            "value": 0
                        }
                    }
                }
            ]
        },
        {
            "transform": [{"filter": {"selection": "label"}}],
            "layer": [
                {
                    "mark": {"type": "rule", "color": "gray"},
                    "encoding": {
                        "x": {"type": "temporal", "field": "date", "aggregate": "min"}
                    }
                },
                {
                    "encoding": {
                        "text": {"type": "quantitative", "field": "download"},
                        "x": {"type": "temporal", "field": "date"},
                        "y": {"type": "quantitative", "field": "download"}
                    },
                    "layer": [
                        {
                            "mark": {
                                "type": "text",
                                "stroke": "white",
                                "strokeWidth": 2,
                                "align": "left",
                                "dx": 5,
                                "dy": -5
                            }
                        },
                        {
                            "mark": {"type": "text", "align": "left", "dx": 5, "dy": -5},
                            "encoding": {
                                "color": {"type": "nominal", "field": "name"}
                            }
                        }
                    ]
                }
            ]
        }
    ]
};