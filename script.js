
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-19 10:00:00", "b": 1251.2}, {"a": "2024-11-19 10:05:00", "b": 1235.6}, {"a": "2024-11-19 10:10:00", "b": 1279.4}, {"a": "2024-11-19 10:15:00", "b": 1317.6666666666667}, {"a": "2024-11-19 10:20:00", "b": 1321.0}, {"a": "2024-11-19 10:25:00", "b": 1298.75}, {"a": "2024-11-19 10:30:00", "b": 788.4}, {"a": "2024-11-19 10:35:00", "b": 781.4}, {"a": "2024-11-19 10:40:00", "b": 800.75}, {"a": "2024-11-19 10:45:00", "b": 780.0}, {"a": "2024-11-19 10:50:00", "b": 742.8}, {"a": "2024-11-19 10:55:00", "b": 738.2}, {"a": "2024-11-19 11:00:00", "b": 721.0}, {"a": "2024-11-19 11:05:00", "b": 664.4}, {"a": "2024-11-19 11:10:00", "b": 673.0}, {"a": "2024-11-19 11:15:00", "b": 642.4}, {"a": "2024-11-19 11:20:00", "b": 656.5}, {"a": "2024-11-19 11:25:00", "b": 658.4}, {"a": "2024-11-19 11:30:00", "b": 648.8}, {"a": "2024-11-19 11:35:00", "b": 618.8}, {"a": "2024-11-19 11:40:00", "b": 614.0}, {"a": "2024-11-19 11:45:00", "b": 606.2}, {"a": "2024-11-19 11:50:00", "b": 597.8}, {"a": "2024-11-19 11:55:00", "b": 595.5}, {"a": "2024-11-19 12:00:00", "b": 592.6}, {"a": "2024-11-19 12:05:00", "b": 606.0}, {"a": "2024-11-19 12:10:00", "b": 605.0}, {"a": "2024-11-19 12:15:00", "b": 593.5}, {"a": "2024-11-19 12:20:00", "b": 592.4}, {"a": "2024-11-19 12:25:00", "b": 580.6}, {"a": "2024-11-19 12:30:00", "b": 575.4}, {"a": "2024-11-19 12:35:00", "b": 579.0}, {"a": "2024-11-19 12:40:00", "b": 575.2}, {"a": "2024-11-19 12:45:00", "b": 596.2}, {"a": "2024-11-19 12:50:00", "b": 601.4}, {"a": "2024-11-19 12:55:00", "b": 606.4}, {"a": "2024-11-19 13:00:00", "b": 598.0}, {"a": "2024-11-19 13:05:00", "b": 596.3333333333334}, {"a": "2024-11-19 13:10:00", "b": 585.4}, {"a": "2024-11-19 13:15:00", "b": 612.6}, {"a": "2024-11-19 13:20:00", "b": 586.8}, {"a": "2024-11-19 13:25:00", "b": 557.8}, {"a": "2024-11-19 13:30:00", "b": 549.75}, {"a": "2024-11-19 13:35:00", "b": 531.0}, {"a": "2024-11-19 13:40:00", "b": 527.75}, {"a": "2024-11-19 13:45:00", "b": 528.25}, {"a": "2024-11-19 13:50:00", "b": 530.8}, {"a": "2024-11-19 13:55:00", "b": 531.8}, {"a": "2024-11-19 14:00:00", "b": 527.2}, {"a": "2024-11-19 14:05:00", "b": 519.3333333333334}, {"a": "2024-11-19 14:10:00", "b": 508.75}, {"a": "2024-11-19 14:15:00", "b": 504.25}, {"a": "2024-11-19 14:20:00", "b": 505.2}, {"a": "2024-11-19 14:25:00", "b": 505.0}, {"a": "2024-11-19 14:30:00", "b": 495.0}, {"a": "2024-11-19 14:35:00", "b": 497.4}, {"a": "2024-11-19 14:40:00", "b": 491.75}, {"a": "2024-11-19 14:45:00", "b": 489.4}, {"a": "2024-11-19 14:50:00", "b": 481.5}, {"a": "2024-11-19 14:55:00", "b": 471.75}, {"a": "2024-11-19 15:00:00", "b": 487.4}, {"a": "2024-11-19 15:05:00", "b": 500.8}, {"a": "2024-11-19 15:10:00", "b": 475.4}, {"a": "2024-11-19 15:15:00", "b": 479.0}, {"a": "2024-11-19 15:20:00", "b": 484.75}, {"a": "2024-11-19 15:25:00", "b": 492.6}, {"a": "2024-11-19 15:30:00", "b": 503.6}, {"a": "2024-11-19 15:35:00", "b": 517.25}, {"a": "2024-11-19 15:40:00", "b": 515.6}, {"a": "2024-11-19 15:45:00", "b": 497.8}, {"a": "2024-11-19 15:50:00", "b": 487.25}, {"a": "2024-11-19 15:55:00", "b": 492.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    