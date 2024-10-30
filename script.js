
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 17:10:00", "b": 406.6666666666667}, {"a": "2024-10-29 17:15:00", "b": 405.6666666666667}, {"a": "2024-10-29 17:20:00", "b": 403.6}, {"a": "2024-10-29 17:25:00", "b": 403.0}, {"a": "2024-10-29 17:30:00", "b": 405.5}, {"a": "2024-10-29 17:35:00", "b": 405.5}, {"a": "2024-10-29 17:45:00", "b": 407.0}, {"a": "2024-10-29 17:50:00", "b": 406.0}, {"a": "2024-10-29 17:55:00", "b": 406.0}, {"a": "2024-10-29 18:00:00", "b": 406.0}, {"a": "2024-10-29 18:05:00", "b": 406.0}, {"a": "2024-10-29 18:10:00", "b": 406.5}, {"a": "2024-10-29 18:15:00", "b": 405.5}, {"a": "2024-10-29 18:20:00", "b": 403.0}, {"a": "2024-10-29 18:25:00", "b": 405.3333333333333}, {"a": "2024-10-29 18:30:00", "b": 407.5}, {"a": "2024-10-29 18:35:00", "b": 405.5}, {"a": "2024-10-29 18:40:00", "b": 404.5}, {"a": "2024-10-29 18:45:00", "b": 401.75}, {"a": "2024-10-29 18:50:00", "b": 405.5}, {"a": "2024-10-29 18:55:00", "b": 405.0}, {"a": "2024-10-29 19:00:00", "b": 404.5}, {"a": "2024-10-29 19:05:00", "b": 402.5}, {"a": "2024-10-29 19:10:00", "b": 403.5}, {"a": "2024-10-29 19:15:00", "b": 405.5}, {"a": "2024-10-29 19:20:00", "b": 406.5}, {"a": "2024-10-29 19:25:00", "b": 404.0}, {"a": "2024-10-29 19:30:00", "b": 405.3333333333333}, {"a": "2024-10-29 19:35:00", "b": 405.2}, {"a": "2024-10-29 19:40:00", "b": 407.0}, {"a": "2024-10-29 19:45:00", "b": 406.5}, {"a": "2024-10-29 19:50:00", "b": 405.6666666666667}, {"a": "2024-10-29 19:55:00", "b": 407.5}, {"a": "2024-10-29 20:00:00", "b": 407.3333333333333}, {"a": "2024-10-29 20:05:00", "b": 407.6666666666667}, {"a": "2024-10-29 20:10:00", "b": 409.75}, {"a": "2024-10-29 20:15:00", "b": 441.4}, {"a": "2024-10-29 20:20:00", "b": 508.0}, {"a": "2024-10-29 20:25:00", "b": 542.4}, {"a": "2024-10-29 20:30:00", "b": 537.0}, {"a": "2024-10-29 20:35:00", "b": 552.0}, {"a": "2024-10-29 20:40:00", "b": 578.4}, {"a": "2024-10-29 20:45:00", "b": 583.8}, {"a": "2024-10-29 20:50:00", "b": 593.6}, {"a": "2024-10-29 20:55:00", "b": 603.4}, {"a": "2024-10-29 21:00:00", "b": 596.0}, {"a": "2024-10-29 21:05:00", "b": 602.2}, {"a": "2024-10-29 21:10:00", "b": 588.0}, {"a": "2024-10-29 21:15:00", "b": 586.6}, {"a": "2024-10-29 21:20:00", "b": 589.4}, {"a": "2024-10-29 21:25:00", "b": 595.5}, {"a": "2024-10-29 21:30:00", "b": 602.75}, {"a": "2024-10-29 21:35:00", "b": 600.0}, {"a": "2024-10-29 21:40:00", "b": 581.8}, {"a": "2024-10-29 21:45:00", "b": 584.8}, {"a": "2024-10-29 21:50:00", "b": 585.4}, {"a": "2024-10-29 21:55:00", "b": 587.0}, {"a": "2024-10-29 22:00:00", "b": 586.2}, {"a": "2024-10-29 22:05:00", "b": 584.2}, {"a": "2024-10-29 22:10:00", "b": 574.6}, {"a": "2024-10-29 22:15:00", "b": 570.2}, {"a": "2024-10-29 22:20:00", "b": 581.75}, {"a": "2024-10-29 22:25:00", "b": 590.0}, {"a": "2024-10-29 22:30:00", "b": 589.75}, {"a": "2024-10-29 22:35:00", "b": 595.5}, {"a": "2024-10-29 22:40:00", "b": 608.75}, {"a": "2024-10-29 22:45:00", "b": 612.5}, {"a": "2024-10-29 22:50:00", "b": 622.6}, {"a": "2024-10-29 22:55:00", "b": 621.6}, {"a": "2024-10-29 23:00:00", "b": 605.0}, {"a": "2024-10-29 23:05:00", "b": 617.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    