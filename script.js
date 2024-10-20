
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-19 13:00:00", "b": 654.8}, {"a": "2024-10-19 13:05:00", "b": 655.6}, {"a": "2024-10-19 13:10:00", "b": 651.5}, {"a": "2024-10-19 13:15:00", "b": 646.4}, {"a": "2024-10-19 13:20:00", "b": 641.6666666666666}, {"a": "2024-10-19 13:25:00", "b": 638.0}, {"a": "2024-10-19 13:30:00", "b": 646.0}, {"a": "2024-10-19 13:35:00", "b": 621.4}, {"a": "2024-10-19 13:40:00", "b": 602.75}, {"a": "2024-10-19 13:45:00", "b": 615.75}, {"a": "2024-10-19 13:50:00", "b": 622.0}, {"a": "2024-10-19 13:55:00", "b": 628.6666666666666}, {"a": "2024-10-19 14:00:00", "b": 614.2}, {"a": "2024-10-19 14:05:00", "b": 595.6}, {"a": "2024-10-19 14:10:00", "b": 605.75}, {"a": "2024-10-19 14:15:00", "b": 601.6}, {"a": "2024-10-19 14:20:00", "b": 601.25}, {"a": "2024-10-19 14:25:00", "b": 591.0}, {"a": "2024-10-19 14:30:00", "b": 591.5}, {"a": "2024-10-19 14:35:00", "b": 583.6}, {"a": "2024-10-19 14:40:00", "b": 573.6666666666666}, {"a": "2024-10-19 14:45:00", "b": 578.75}, {"a": "2024-10-19 14:50:00", "b": 582.5}, {"a": "2024-10-19 14:55:00", "b": 571.0}, {"a": "2024-10-19 15:00:00", "b": 561.5}, {"a": "2024-10-19 15:05:00", "b": 568.75}, {"a": "2024-10-19 15:10:00", "b": 565.5}, {"a": "2024-10-19 15:15:00", "b": 569.5}, {"a": "2024-10-19 15:20:00", "b": 568.2}, {"a": "2024-10-19 15:25:00", "b": 563.0}, {"a": "2024-10-19 15:30:00", "b": 561.6}, {"a": "2024-10-19 15:35:00", "b": 565.0}, {"a": "2024-10-19 15:40:00", "b": 558.5}, {"a": "2024-10-19 15:45:00", "b": 558.0}, {"a": "2024-10-19 15:50:00", "b": 562.4}, {"a": "2024-10-19 15:55:00", "b": 557.8}, {"a": "2024-10-19 16:00:00", "b": 558.8}, {"a": "2024-10-19 16:05:00", "b": 556.0}, {"a": "2024-10-19 16:10:00", "b": 556.0}, {"a": "2024-10-19 16:15:00", "b": 570.8}, {"a": "2024-10-19 16:20:00", "b": 575.5}, {"a": "2024-10-19 16:25:00", "b": 568.0}, {"a": "2024-10-19 16:30:00", "b": 576.4}, {"a": "2024-10-19 16:35:00", "b": 571.0}, {"a": "2024-10-19 16:40:00", "b": 560.5}, {"a": "2024-10-19 16:45:00", "b": 573.0}, {"a": "2024-10-19 16:50:00", "b": 568.5}, {"a": "2024-10-19 16:55:00", "b": 555.5}, {"a": "2024-10-19 17:00:00", "b": 570.0}, {"a": "2024-10-19 17:05:00", "b": 570.6}, {"a": "2024-10-19 17:10:00", "b": 553.2}, {"a": "2024-10-19 17:15:00", "b": 540.5}, {"a": "2024-10-19 17:20:00", "b": 538.3333333333334}, {"a": "2024-10-19 17:25:00", "b": 540.4}, {"a": "2024-10-19 17:30:00", "b": 541.8}, {"a": "2024-10-19 17:35:00", "b": 535.25}, {"a": "2024-10-19 17:40:00", "b": 609.6}, {"a": "2024-10-19 17:45:00", "b": 645.0}, {"a": "2024-10-19 17:50:00", "b": 692.6}, {"a": "2024-10-19 17:55:00", "b": 658.4}, {"a": "2024-10-19 18:00:00", "b": 656.4}, {"a": "2024-10-19 18:05:00", "b": 656.0}, {"a": "2024-10-19 18:10:00", "b": 639.75}, {"a": "2024-10-19 18:15:00", "b": 655.0}, {"a": "2024-10-19 18:20:00", "b": 658.4}, {"a": "2024-10-19 18:25:00", "b": 659.75}, {"a": "2024-10-19 18:30:00", "b": 653.8}, {"a": "2024-10-19 18:35:00", "b": 645.4}, {"a": "2024-10-19 18:40:00", "b": 643.3333333333334}, {"a": "2024-10-19 18:45:00", "b": 639.25}, {"a": "2024-10-19 18:50:00", "b": 609.6}, {"a": "2024-10-19 18:55:00", "b": 620.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    