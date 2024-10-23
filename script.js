
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 17:20:00", "b": 579.75}, {"a": "2024-10-22 17:25:00", "b": 592.0}, {"a": "2024-10-22 17:30:00", "b": 611.6666666666666}, {"a": "2024-10-22 17:35:00", "b": 612.0}, {"a": "2024-10-22 17:40:00", "b": 643.0}, {"a": "2024-10-22 17:45:00", "b": 608.6}, {"a": "2024-10-22 17:50:00", "b": 598.75}, {"a": "2024-10-22 17:55:00", "b": 605.6}, {"a": "2024-10-22 18:00:00", "b": 598.3333333333334}, {"a": "2024-10-22 18:05:00", "b": 583.0}, {"a": "2024-10-22 18:10:00", "b": 575.5}, {"a": "2024-10-22 18:15:00", "b": 580.8}, {"a": "2024-10-22 18:20:00", "b": 593.25}, {"a": "2024-10-22 18:25:00", "b": 596.8}, {"a": "2024-10-22 18:30:00", "b": 608.2}, {"a": "2024-10-22 18:35:00", "b": 602.75}, {"a": "2024-10-22 18:40:00", "b": 611.5}, {"a": "2024-10-22 18:45:00", "b": 607.6}, {"a": "2024-10-22 18:50:00", "b": 631.0}, {"a": "2024-10-22 18:55:00", "b": 666.25}, {"a": "2024-10-22 19:00:00", "b": 669.8}, {"a": "2024-10-22 19:05:00", "b": 659.5}, {"a": "2024-10-22 19:10:00", "b": 659.4}, {"a": "2024-10-22 19:15:00", "b": 654.2}, {"a": "2024-10-22 19:20:00", "b": 652.6}, {"a": "2024-10-22 19:25:00", "b": 652.6666666666666}, {"a": "2024-10-22 19:30:00", "b": 663.6}, {"a": "2024-10-22 19:35:00", "b": 673.6}, {"a": "2024-10-22 19:40:00", "b": 653.4}, {"a": "2024-10-22 19:45:00", "b": 604.4}, {"a": "2024-10-22 19:50:00", "b": 615.4}, {"a": "2024-10-22 19:55:00", "b": 645.75}, {"a": "2024-10-22 20:00:00", "b": 661.5}, {"a": "2024-10-22 20:05:00", "b": 659.25}, {"a": "2024-10-22 20:10:00", "b": 643.6}, {"a": "2024-10-22 20:15:00", "b": 652.0}, {"a": "2024-10-22 20:20:00", "b": 662.75}, {"a": "2024-10-22 20:25:00", "b": 659.75}, {"a": "2024-10-22 20:30:00", "b": 661.0}, {"a": "2024-10-22 20:35:00", "b": 637.5}, {"a": "2024-10-22 20:40:00", "b": 635.2}, {"a": "2024-10-22 20:45:00", "b": 618.6}, {"a": "2024-10-22 20:50:00", "b": 606.0}, {"a": "2024-10-22 20:55:00", "b": 603.4}, {"a": "2024-10-22 21:00:00", "b": 620.8}, {"a": "2024-10-22 21:05:00", "b": 591.0}, {"a": "2024-10-22 21:10:00", "b": 553.6}, {"a": "2024-10-22 21:15:00", "b": 537.2}, {"a": "2024-10-22 21:20:00", "b": 527.2}, {"a": "2024-10-22 21:25:00", "b": 525.0}, {"a": "2024-10-22 21:30:00", "b": 514.6}, {"a": "2024-10-22 21:35:00", "b": 490.8}, {"a": "2024-10-22 21:40:00", "b": 458.4}, {"a": "2024-10-22 21:45:00", "b": 419.8}, {"a": "2024-10-22 21:50:00", "b": 405.4}, {"a": "2024-10-22 21:55:00", "b": 402.0}, {"a": "2024-10-22 22:00:00", "b": 403.0}, {"a": "2024-10-22 22:05:00", "b": 402.25}, {"a": "2024-10-22 22:10:00", "b": 401.75}, {"a": "2024-10-22 22:15:00", "b": 401.5}, {"a": "2024-10-22 22:20:00", "b": 402.25}, {"a": "2024-10-22 22:25:00", "b": 400.5}, {"a": "2024-10-22 22:30:00", "b": 401.6}, {"a": "2024-10-22 22:35:00", "b": 401.0}, {"a": "2024-10-22 22:40:00", "b": 402.6666666666667}, {"a": "2024-10-22 22:45:00", "b": 401.8}, {"a": "2024-10-22 22:50:00", "b": 403.0}, {"a": "2024-10-22 22:55:00", "b": 403.0}, {"a": "2024-10-22 23:00:00", "b": 402.3333333333333}, {"a": "2024-10-22 23:05:00", "b": 402.5}, {"a": "2024-10-22 23:10:00", "b": 402.4}, {"a": "2024-10-22 23:15:00", "b": 404.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    